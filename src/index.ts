import type { IChangedTiddlers } from 'tiddlywiki';
import { widget as Widget } from '$:/core/modules/widgets/widget.js';

class ExampleWidget extends Widget {
  // constructor(parseTreeNode: IParseTreeNode, options?: unknown) {
  //   super(parseTreeNode, options);
  // }

  refresh(_changedTiddlers: IChangedTiddlers): boolean {
    return false;
  }

  /**
   * Lifecycle method: Render this widget into the DOM
   */
  render(parent: Node, _nextSibling: Node): void {
    this.parentDomNode = parent;
    this.computeAttributes();
    this.execute();

    const containerElement = document.createElement('div');
    this.domNodes.push(containerElement);
    // eslint-disable-next-line unicorn/prefer-dom-node-append
    parent.appendChild(containerElement);
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
exports.widget = ExampleWidget;
exports.ExampleWidget = ExampleWidget;
