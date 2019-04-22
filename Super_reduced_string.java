

import java.util.Scanner;

public class Solution {
	public static void main(String[] args){
		
		Scanner s=new Scanner(System.in);
		
		String stg=s.nextLine();
		
		String sam="";
		
		for(int i=0;i<stg.length();i++){
			char c=stg.charAt(i);
			if(sam.length()>0 && sam.charAt(sam.length()-1)==c){
				sam=sam.substring(0,sam.length()-1);
			}
			else{
				sam+=c;
			}
			
		}
        if(sam.isEmpty()){
		System.out.println("Empty String");
        }
        else{
            System.out.println(sam);
        }
	}

}
