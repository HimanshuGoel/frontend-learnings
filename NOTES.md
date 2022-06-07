# Notes

## Angular

Client-side errors - On the client side, when something unexpected happens, a JavaScript Error is thrown. It has two important properties that we can use:

- message — Human-readable description of the error.
- stack — Error stack trace with a history (call stack) of what files were ‘responsible’ of causing that Error.

Server-side errors - On the server-side, when something goes wrong, a HttpErrorResponse is returned. As with the JavaScript error, it has a message property that we can use for notifications.

**Next Topic**

Modifying DOM Elements: We are familiar with a lot of JavaScript methods that modify the DOM element. Here are some of them:

- classList.add()
- setAttribute()
- style.setProperty()

We should not access the DOM elements directly by using ElementRef Class. Permitting direct access to the DOM can make our applications more vulnerable and XSS attacks. Renderer — Makes direct DOM access safe and it is Platform independent. It modifies the DOM elements without touch the DOM directly. A renderer is a service that consists of some methods. It helps to manipulate the DOM.

**Next Topic**

removeChild(){
this.renderer.removeChild(this.host.nativeElement, this.childComp.first.nativeElement);
}

We have removed the child component, but still, the child components counts remain 1. Why? How to resolve it?

DOM and View Relationship - Angular has a view concept. Look at the diagram; it will give a clear idea about the view and DOM relationship. The view is nothing but the reference of DOM. While we run the Angular application, it will create multiple views.

For each component creation, view also created by Angular. We are seeing the component hierarchy outside. But under the hood view hierarchy also created based on components hierarchy.

If we made any changes in DOM such as drag, add, or remove the DOM element means, view should be updated immediately. Otherwise, it will be a problem.

Change Detection runs based on the Hierarchy of views.

Using Method 1, we removed the child component from the DOM. But view hierarchy remains the same, and the view is not updated. So it shows one child. Here this is a small scenario that’s fine, but if we removed the ten components and view is not updated means, Angular still runs change detection for all deleted components. That will badly affect our application.

View Container makes DOM structure changes safe - insert(), move(), remove(), createEmbeddedView()

We can make any DOM element as a view container. But usually, all the people commonly take <ng-container> as a view container. ng-container is nothing but an HTML tag but it is the Angular specific.

There are two types of views.

Embedded Views — Always be a part of the view container.
Host Views — Always be a part of a view container and also be standalone.

If DOM elements created by Angular, views will be created by default. If we use Jquery or JavaScript to change the DOM structure directly, then no views will be updated. Angular doesn’t know that the DOM element is created. So change detection not works for that DOM element.
Modify DOM elements — Use Renderer service.
Modify DOM Structure — Use ViewContainerRef and TemplateRef classes.

Here, ViewContainerRef is a very important part, which makes the DOM node as a view container.
@ViewChild(‘viewContainer’, {‘read’: ViewContainerRef}) viewContainer;

This step creates the view and adds the view into view container.
viewContainer.CreateEmbeddedView(TemplateRef);
