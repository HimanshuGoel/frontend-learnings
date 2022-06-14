# Notes

## Angular

### Topic 1

Client-side errors - On the client side, when something unexpected happens, a JavaScript Error is thrown. It has two important properties that we can use:

- message — Human-readable description of the error.
- stack — Error stack trace with a history (call stack) of what files were ‘responsible’ of causing that Error.

Server-side errors - On the server-side, when something goes wrong, a HttpErrorResponse is returned. As with the JavaScript error, it has a message property that we can use for notifications.

### Topic 2

Modifying DOM Elements: We are familiar with a lot of JavaScript methods that modify the DOM element. Here are some of them:

- classList.add()
- setAttribute()
- style.setProperty()

We should not access the DOM elements directly by using ElementRef Class. Permitting direct access to the DOM can make our applications more vulnerable and XSS attacks. Renderer — Makes direct DOM access safe and it is Platform independent. It modifies the DOM elements without touch the DOM directly. A renderer is a service that consists of some methods. It helps to manipulate the DOM.

### Topic 3

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

### Topic 4

Difference between Constructor and ngOnInit - A constructor in turn is a different thing. Regardless whether you implement it or not in TypeScript class it’s still will be called when creating an instance of a class. This is because a typescript class constructor is transpiled into a JavaScript constructor function. If you omit the constructor in a class, it’s transpiled into an empty function.

Angular bootstrap process consists of the two major stages: constructing components tree, running change detection.

And the constructor of the component is called when Angular constructs components tree. All lifecycle hooks including ngOnInit are called as part of the following change detection phase.

A component constructor is the only method that is called in the context of the injector so if you need any dependency that’s the only place to get those dependencies. The @Input communication mechanism is processed as part of following change detection phase so input bindings are not available in constructor.

When Angular starts change detection the components tree is constructed and the constructors for all components in the tree have been called. Also at this point every component’s template nodes are added to the DOM.

```html
<my-app> <child-comp [i]="prop"></child-comp></my-app>
```

So Angular starts bootstrapping the application. As described above it first creates classes for each component. So it calls MyAppComponent constructor. When executing a component constructor Angular resolves all dependencies that are injected into MyAppComponent constructor and provides them as parameters. It also creates a DOM node which is the host element of the my-app component. Then it proceeds to creating a host element for the child-comp and calling ChildComponent constructor. At this stage Angular is not concerned with the i input binding and any lifecycle hooks. So when this process is finished Angular ends up with the following tree of component views:

MyAppView

- MyApp component instance
- my-app host element data
  ChildComponentView - ChildComponent component instance - child-comp host element data

Only then Angular runs change detection and updates bindings for the my-app and calls ngOnInit on the MyAppComponent instance. Then it proceeds to updating the bindings for the child-comp and calls ngOnInit on the ChildComponent class.

NgOnInit - As we learnt above when Angular calls ngOnInit it has finished creating a component DOM, injected all required dependencies through constructor and processed input bindings. So here you have all the required information available which makes it a good place to perform initialization logic.

It’s a common practice to use ngOnInit to perform initialization logic even if this logic doesn’t depend on DI, DOM or input bindings.

### Topic 5

Do you know if Angular first checks siblings of the current component (breadth-first) or its children (depth-first)?

Key operations performed by change detection are the following:

- update child components properties
- call NgOnChanges and NgDoCheck lifecycle hooks on child components
- update DOM on the current component
- run change detection for child components

I highlighted one interesting specifics above — when Angular checks the current component it calls lifecycle hooks on child components, but renders DOM for the current component. And that’s a very important distinction. This is precisely the reason that makes it seem as if the algorithm runs breadth-first if we put logging into NgDoCheck hook. When Angular checks a current component it calls lifecycle hooks for all its child components which are siblings. Suppose Angular checks K component now and calls NgDoCheck lifecycle hook on L and C. So, we get the following:

Looks like breadth-first algorithm. However, remember that Angular still in the process of checking K component. So after completing all operations for the K component it doesn’t proceed to checking the sibling V component, as it would with the breadth-first implementation. Instead, it goes on to check L component, which is a child of K. This is the depth-first implementation of change detection algorithm. And as we now know it will call ngDoCheck on J and O components and this is exactly what happens.

So, after all, my gut didn’t let me down. Change detection mechanism is implemented as depth-first internally, but involves calling ngDoCheck lifecycle hooks on sibling components first.

<https://indepth.dev/posts/1002/he-who-thinks-change-detection-is-depth-first-and-he-who-thinks-its-breadth-first-are-both-usually-right>

### Topic 6

ng g c greet --flat --skip-import

As of the official documentation, ComponentFactoryResolver class is a simple registry that maps components to generated ComponentFactory classes that can be used to create an instance of the component using the create() method.

The ViewContainerRef represents a container where one or more views can be attached. It can contain host views by instantiating a component with the createComponent() method.

### Topic 7

Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery.

### Topic 8

Making a Flexbox layout - Angular Flex-Layout is an official package to use CSS Flexbox/Grid in the template HTML declaratively.
It also provides a support for building the responsive UI with simple template syntax.

### Topic 9

ng new my-workspace --no-create-application

### Topic 10

Creating Dynamic Component using Directive
ViewContainerRef can usually only be used after ngAfterViewInit hook.

We have to wait until the ViewChild query is evaluated and that happens during change detection. We can access the reference only after ngAfterViewInit lifecycle hook. But what if we don’t want to wait until Angular runs change detection and want to have a complete component view before change detection? As it turns out we can do that using a directive instead of template reference and ViewChild query.

we now know how a directive can access the view container before change detection.

### Topic 11

Rendering dynamic components by selector

Angular gives us the mechanism to render components dynamically through View Container using ComponentFactory. To do this, we need to know the Component Type at the compile time.

The most dynamic component rendering mechanism would be the one where we don't know what component will be rendered at the compile time. This article talks about rendering an Angular component based on its selector, which is available only at run-time in the browser.

Before Ivy (version 8), Angular had a mechanism to define entryComponents in modules. Adding the component to the entryComponents array would make the factories for these dynamic components available at runtime. It was needed to make sure TreeShaking does not remove these components from the final production bundle of the module.
