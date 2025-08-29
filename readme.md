### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   In javaScript, Basically all of are selection methods of DOM. Main difference is way to selection and what they return.
   firstly, getElementById is selected one element throw specified Id. it's return a single element from DOM.
   Secondly, getElementsByClassName is selected all of same class name elements.It's return a HTML collection and If need to many elements when this method use.
   thirdly, querySelector is selected 1st match element of Dom with according to className matches like css selector and it's behavior like css selector.A single DOM element return.
   Otherwise, querySelectorAll is selected all match className like css selector and return all match elements A node list.

2. How do you **create and insert a new element into the DOM**?

   first of all, create a element , then insert text, value or attributes and append it in Dom.
   for example, create new element for use >>
   const div = document.createElemet(""div),,
   for insert to use >>
   div.innerText = "I am just for text"; (for text)
   for append to use >>
   document.body.appendChild(div)

3. What is **Event Bubbling** and how does it work?

   Event Bubbling is process or concept of JavaSript Event Model. It's work to triggard to target element to bubbles up in DOM.
   It's search to target element of nassted element in Dom step by step. First it catch target that where it root.
   then it work or bubble up parent, grandparent ,all path of the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   Event Delegation is the structure or concept of Event Bubbling. It's a easy way or idea to handling event for simplyfy.In event delegation, a single eventlistener add to parent and all of it's child are under parent. When eventListener target on a child then the event bubble up on DOM. And parent"s event listener handle the terget element.
   In a word it simplify and improve perfomance. Easy way to handle event. Also Dynamically add or remove child by parent. It also improving memory usage. So it's useful.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

    Basically preventDefault() is use to control of browser default habit. In a word it stop default browser action. We use it form, link sothat it's not to open new page. it is not to work against event bubbling.
    OtherHands, stopPropagation works to stop bubbling. Means if a button into a div Now click the button then it;s parent no to realize that button has clicked. To do that work done by stopPropagation. So it's prevent to event bubbling....
