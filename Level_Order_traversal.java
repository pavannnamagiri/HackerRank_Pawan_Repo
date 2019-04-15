import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {

	/* 
    
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static void levelOrder(Node root) {
        Queue<Node> q = new LinkedList<Node>();
        q.add(root);
 
    while (!q.isEmpty()){
        Node n = q.remove();
       System.out.print(n.data+" "); 
        if (n.left != null){
            q.add(n.left);
        }

        if (n.right != null){
            q.add(n.right);
        }
       
    }
      
      
    }

	public static Node insert(Node root, int data) {
