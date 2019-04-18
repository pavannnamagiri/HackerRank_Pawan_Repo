import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the encryption function below.
    static String encryption(String s) {

        int len=s.length();
        
        Double a = Math.sqrt(s.length()); 
        int h = (int) Math.floor(a);
        int w = (int) Math.ceil(a);
    
        String res="";
        

        char ar[] = s.toCharArray();
            
        for(int i=0;i<w;i++){
            int j = i;
            while(j<s.length()){
                res+=ar[j];
                j += w;
                
            }
            res+=" ";
        }
        
    return res;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scanner.nextLine();

        String result = encryption(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
