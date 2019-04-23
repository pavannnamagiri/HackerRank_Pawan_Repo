import java.io.*;
import java.lang.*;
import java.util.*;

class Solution
{
	private static BufferedReader in;
	private static PrintStream out;
	public static void main(String args[]) throws IOException
	{
		in=new BufferedReader(new InputStreamReader(System.in));
		out= new PrintStream(new BufferedOutputStream(System.out));
		int n,i,j,k,tmp;
		int[] A=new int[1000];
		n=readInt();
		for(i=0;i<n;i++)
		A[i]=readInt();
		for(i=1;i<n;i++)
		{
			for(j=0;j<i;j++)
			{
				if(A[j]>A[i])
				break;
			}
			tmp=A[i];
			for(k=i;k>j;k--)
			{
				A[k]=A[k-1];
			}
			A[j]=tmp;
		}
		for(i=0;i<n-1;i++)
		{
			System.out.print(A[i]);
			System.out.print(" ");
		}
		System.out.print(A[n-1]);
		out.flush();
        out.close();
	}
	public static int readInt() throws IOException
	{
		int ret=0,i;
		i=in.read();
		while(i<48 || i>57)
		i=in.read();
		while(i>=48 && i<=57)
		{
			ret=ret*10+i-48;
			i=in.read();
		}
		return ret;
	}
}
