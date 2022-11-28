class Node{
    constructor(data){
        this.data = data;
        this.left  = null;
        this.right = null;
    }
}

class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    
    insert(data){
        let newNode = new Node(data);
 
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root , newNode);
        }
    }

    insertNode(node , newNode){
        if(newNode.data < node.data){
            
            if(node.left ===  null){
                node.left = newNode;
            }else{
                this.insertNode(node.left , newNode);
            }
        }else{

            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right , newNode);
            }
        }
    }


    delete(data){
       this.root =  this.deleteNode(this.root , data)
    }

    deleteNode(node , key){
        if(node == null){
            return null;
        }else if( key < node.data){
             node.left = this.deleteNode(node.left , key);
        }else if( key > node.data){
            node.right = this.deleteNode(node.right , key);
        }else{

            if( node.left == null && node.right == null){
                node = null;
                return node;
            }
            if( node.left == null){
                node = node.right;
                return node
            }else if(node.right == null){
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(this.right);
            node.data = aux.data;

            node.right = this.deleteNode(this.right , key);
        }
    }


    findMinNode(node){

        if(node.left == null){
            return node;
        }else{
            this.findMinNode(node.left);
        }
    }


    getRootNode(){
        return this.root;
    }


    // In order Traversal [ Left -> Root -> Right ]
    inorder(node){
        // console.log(node);
        if(node !=null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preOrder(node){
        if(node !=null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node){
        if(node !=null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data);
        }
    }



}

var BST  = new BinarySearchTree();
// Inserting nodes to the BinarySearchTree

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
BST.inorder(root);
console.log('PREORDER');
BST.preOrder(root);
console.log('POSTORDER');
BST.postOrder(root);
