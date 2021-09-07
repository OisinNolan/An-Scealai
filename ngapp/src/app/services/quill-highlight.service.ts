import { Injectable } from '@angular/core';
import Quill from 'quill';
import { map } from 'rxjs/operators';
import { TranslationService } from 'src/app/translation.service';
import {
  GramadoirRuleId,
  GrammarService,
  GramadoirTag } from 'src/app/grammar.service';

const Tooltip = Quill.import('ui/tooltip');

export type QuillHighlightTag = {
  start: number;
  length: number;
  type: GramadoirRuleId;
  tooltip: any;
  color: string;
  messages: {
    en: string;
    ga: string;
  };
};

const Parchment = Quill.import('parchment');
const gramadoirTag =
  new Parchment.Attributor.Attribute(
    'gramadoir-tag',
    'data-gramadoir-tag',
    {scope: Parchment.Scope.INLINE});

Quill.register(gramadoirTag);

@Injectable({
  providedIn: 'root'
})
export class QuillHighlightService {
  mostRecentGramadoirInput = null;
  currentGramadoirHighlightTags: QuillHighlightTag[] = [];

  constructor(
  private grammar: GrammarService,
  private ts: TranslationService,
  ) { }

  async updateGrammarErrors(quillEditor: Quill, text: string) {
    // my tslint server keeps
    // asking me to brace these guys
    if (!quillEditor) { return; }

    this.clearAllGramadoirTags(quillEditor);

    // (no paragraphs/new lines)
    // const gramadoirInputText = text; // this.story.text.replace(/\n/g, ' ');
    this.mostRecentGramadoirInput = text; // gramadoirInputText;

    const gramadoirPromiseIrish =
      this.grammar.gramadoirDirectObservable(text, 'ga')
      .toPromise();

    const grammarCheckerErrors =
      await this.grammar
          .gramadoirDirectObservable(
            text,
            'en')
          .pipe(
            map((tagData: GramadoirTag[]) =>
              tagData.map(tag =>
                ({
                  start: + tag.fromx,
                  length: + tag.tox + 1 - tag.fromx,
                  type: this.grammar.string2GramadoirRuleId(tag.ruleId),
                  tooltip: null,
                  messages: { en: tag.msg},
                }) as QuillHighlightTag
              )
            ),
          ).toPromise();

    const grammarCheckerErrorsIrish = await gramadoirPromiseIrish;

    grammarCheckerErrors.forEach((e, i) => {
      e.messages.ga = grammarCheckerErrorsIrish[i].msg;
    });

    this.currentGramadoirHighlightTags = grammarCheckerErrors;
  }

  applyGramadoirTagFormatting(quillEditor: Quill) {
    if (!this.currentGramadoirHighlightTags) { return; }

    this.currentGramadoirHighlightTags
        .forEach((error) => {
          // Add highlighting to error text
          quillEditor
              .formatText(
                  error.start,
                  error.length,
                  {
                    'gramadoir-tag': error.type,
                  },
                  'api'
              );
        });

    const gramadoirSpans = document.querySelectorAll('[data-gramadoir-tag]');

    this.currentGramadoirHighlightTags.forEach((error, i) => {
      this.createGrammarPopup(quillEditor, error, gramadoirSpans[i]);
    });
  }

  clearAllGramadoirTags(quillEditor: Quill) {
    this.clearGramadoirTagFormatting(quillEditor);
    // remove any remaining custom-tooltips from the DOM.
    //  -> without doing this, a tooltip can live on past its
    //     corresponding highlight tag if the user stays hovering
    //     on the highlight tag while the grammar error is fixed.
    document.querySelectorAll('.custom-tooltip').forEach(elem => elem.remove());
  }

  private clearGramadoirTagFormatting(quillEditor: Quill) {
    quillEditor.formatText(
      0, // from the very beginning of the text
      quillEditor.getLength(), // to the very end of the text
      {'gramadoir-tag': null} // delete all gramadoir-tag's on the parchment
    );
  }

  private createGrammarPopup(quillEditor: Quill, error: QuillHighlightTag, tagElement: Element) {
    // Create a customised quill tooltip containing
    // a message about the grammar error
    const bounds = quillEditor.getBounds(error.start, error.length);
    error.tooltip = new Tooltip(quillEditor);
    error.tooltip.root.classList.add('custom-tooltip');

    // Add hover UI logic to the grammar error span element
    tagElement.addEventListener('mouseover', () => {
      this.mouseOverTagElem(quillEditor, error, bounds);
    });

    tagElement.addEventListener('mouseout', () => {
      error.tooltip.hide();
    });
  }

  private mouseOverTagElem(
    quillEditor: Quill,
    error: QuillHighlightTag,
    bounds: any,
  )
  {
    const userFriendlyMsgs =
      this.grammar
          .userFriendlyGramadoirMessage[error.type];

    error.tooltip.root.innerHTML =
      // Prefer user friendly message
      userFriendlyMsgs ?
      userFriendlyMsgs[this.ts.l.iso_code] :
      error.messages[this.ts.l.iso_code];
    error.tooltip.show();
    error.tooltip.position(bounds);

    // Ensure that tooltip isn't cut off by the right edge of the editor
    const rightOverflow =
      (error.tooltip.root.offsetLeft + error.tooltip.root.offsetWidth) -
      quillEditor.root.offsetWidth;

    error.tooltip.root.style.left =
      (rightOverflow > 0) ?
      `${(error.tooltip.root.offsetLeft - rightOverflow) - 5}px` : // - 5px for right padding
      error.tooltip.root.style.left;

    // Ensure that tooltip isn't cut off by the left edge of the editor
    error.tooltip.root.style.left =
      (error.tooltip.root.offsetLeft < 0) ?
      `${(error.tooltip.root.offsetLeft - error.tooltip.root.offsetLeft) + 5}px` : // + 5px for left padding
      error.tooltip.root.style.left;
  }
}
