class Node {
    constructor(data){
        this.data  = data;
        this.left = null;
        this.right  = null;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;
    }


    insert(data){
        
        const newNode  = new Node(data);

        if(this.root ==  null){
            this.root = newNode;
        }else{
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(node , newNode){
        if(newNode.data < node.data){
            if(newNode.left == null){
                node.left = newNode
            }else{
                this.insertNode(this.left ,  newNode);
            }
        }else{
            if(newNode.right === null){
                node.right = newNode;
            }else{
                this.insertNode(this.right , newNode)
            }
        }
    }

    delete(data){
            this.root = this.removeNode(this.root , data)
    }

    removeNode(node , key){

        if(node == null){
            return null;
        }else if(key < node.data){
            node.left = this.removeNode(node.left , key);
        }else if( key > node.data){
            node.right =  this.removeNode(node.right , key);
        }else{
            if(node.left == null && node.right ==  null){
                node = null;
                return node;
            }
            if(node.left == null){
                node = this.right;
            }else if( node.right == null){
                node = this.left
            }

            let aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeNode(node.right , aux.data)


    }
}

    findMinNode(node){
        if(node.left == null){
            return node;
        }
        else{
            this.findMinNode(node.left);
        }
    }


}


let BST = new BinarySearchTree();

BST.insert(10)
BST.insert(5)
BST.insert(20)
console.log(BST);