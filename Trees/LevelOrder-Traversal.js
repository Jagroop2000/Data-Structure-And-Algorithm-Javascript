class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const levelOrderTraversal =(node)=>{
    let q = [];
    q.push(node)

    while(q.length >0){

        let temp = q.shift();
        console.log(temp.data);
       

        if(temp.left !=null){
            q.push(temp.left)
        }
        if(temp.right !=null){
            q.push(temp.right)
        }
    }

    console.log('Depth', depth);
}


let node  = new Node(1)
node.left = new Node(2)
node.left.left = new Node(4);
node.left.left.left = new Node(6);

node.left.right = new Node(5);
node.right = new Node(16);
levelOrderTraversal(node)