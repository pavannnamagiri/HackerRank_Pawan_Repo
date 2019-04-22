

import java.util.Scanner;

public class Solution {
	public static void main(String[] args){
		
		Scanner s=new Scanner(System.in);
		
		String stg=s.nextLine();
		int x=0;
		String sam="";
		if(stg.charAt(0)>='a' && stg.charAt(0)<='z'){
			x++;
			
		}
		
		for(int i=1;i<stg.length();i++){
			char c=stg.charAt(i);
			if(c>='A' && c<='Z'){
			x++;	
			}
				
			
	}
System.out.println(x);
}
}
