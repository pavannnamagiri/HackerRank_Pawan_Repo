import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int sum=0;
            int leftsum = 0;
        int T = in.nextInt();
        for(int a0 = 0; a0 < T; a0++){
            int n = in.nextInt();
            
            int[] a = new int[n];
            for(int a_i=0; a_i < n; a_i++){
                a[a_i] = in.nextInt();
                sum+=a[a_i];
            }
           
            
            if(a.length==1){
            	System.out.println("YES");
            	
            	
            }
            
            
            else{
            	sum=sum-a[0];
            for(int i=1;i<n;i++){
            	
            	if(i==n-1){
            		System.out.println("NO");
            	}
        	   
        	   
        	   sum=sum-a[i];
        	   leftsum=leftsum+a[i-1];
        	   if(sum==leftsum){
        		   System.out.println("YES");
        		   break;
        	   }
            }
           }
        sum=0;
            leftsum=0;
        }
    }
}
