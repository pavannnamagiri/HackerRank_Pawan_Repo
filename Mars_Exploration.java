import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String S = in.next();
        int counter = 0;
        String sosstring = "";
        for (int i = 1; i <= (S.length() / 3); i++) {
            sosstring += "SOS";
        }
        for (int i = 0; i < S.length(); i++) {
            if (S.charAt(i) != sosstring.charAt(i)) {
                counter++;
            }
        }
        System.out.println(counter);
    }
}
