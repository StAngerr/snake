/*
* Interface to render component
* el prop:
*       DESC: component element ref
*
* render method:
*       TYPE: IMPLEMENTED
*       DESC: creates component by calling initialization method by turn
* initElements method:
*       TYPE: IMPLEMENTATION REQUIRED
*       DESC: should create all elements that will be used in component
* addEvents method:
*       TYPE: IMPLEMENTATION REQUIRED
*       DESC: is called after initElements() and attached event to component's elements
* */

export class RenderComponent {
    initElements() {}
    render() {
        this.el = this.initElements();
        this.addEvents();
    }
    addEvents() {}
}
