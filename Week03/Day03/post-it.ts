/* # Post-it

 -  Create a `PostIt` a class that has
     -  a `backgroundColor`
     -  a `text` on it
     -  a `textColor`
 -  Create a few example post-it objects:
     -  an orange with blue text: "Idea 1"
     -  a pink with black text: "Awesome"
     -  a yellow with green text: "Superb!" */

     class PostIt{
         backgroundColor: string;
         text:string;
         textColor:string;

    constructor(pbackgroundColor,ptext,ptextColor){
        this.backgroundColor = pbackgroundColor;
        this.text = ptext
        this.textColor = ptextColor;
    }
    }
    const o1 = new PostIt('orange', 'Idea 1','blue');
    const o2 = new PostIt('pink','Awesome','black');
    const o3 = new PostIt('yellow','Superb','green');
