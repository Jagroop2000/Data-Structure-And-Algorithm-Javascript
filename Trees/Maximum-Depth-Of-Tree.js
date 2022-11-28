// Maximum  Depth of Tree or Height of Tree

class Node {
    constructor(data){
        this.data = data;
        this.left  = null;
        this.right = null;
    }
}


const heightOfTree=(node)=>{
         if(node == null){
            return null;
         }

         let lDepth = heightOfTree(node.left)
         let rDepth = heightOfTree(node.right)

         if(lDepth > rDepth){
            return lDepth +1;
         }else{
            return rDepth+1;
         }
}

let node  = new Node(1);
node.left = new Node(2)
node.left.left = new Node(4);
node.left.left.left = new Node(6);

node.left.right = new Node(5);
node.right = new Node(6);

const depth = heightOfTree(node)
console.log('Depth of Tree', depth);