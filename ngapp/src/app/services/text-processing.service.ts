import { Injectable } from '@angular/core';
import nlp from 'wink-nlp-utils';

// This ought to be a stateless service.
// The service offers functions but should not
// be used to store state.

@Injectable({
  providedIn: 'root'
})
export class TextProcessingService {

  constructor() {
  }

  sentences(text: string) {
    return nlp.string.sentences(text);
  }

  // TODO this is troublesome
  convertHtmlToPlainText(html: string){
    // Create a new div element
    const tempDivElement = document.createElement('div');

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element
    return tempDivElement.textContent || tempDivElement.innerText || '';
  }

  stupidSplitPlainTextIntoSentences() {

  }
}
