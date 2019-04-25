import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        for (int i=0;i<n;i++) {
            int cmd = s.nextInt();
            switch (cmd) {
                case 1:
                    int val = s.nextInt();
                    pq.add(val);
                    break;
                case 2:
                    val = s.nextInt();
                    pq.remove(val);
                    break;
                case 3:
                    val = pq.peek();
                    System.out.println(val);
                    break;
            }
        }
        s.close();
    }
}
