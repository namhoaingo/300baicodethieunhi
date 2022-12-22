package com.leetcode.twentyeight;

public class Solution {

    public  int strStr(String haystack, String needle){

        for(short haystackIndex = 0; haystackIndex < haystack.length(); haystackIndex++){
            if((haystackIndex + needle.length()) > haystack.length())
            {return -1;}
            String subString = haystack.substring(haystackIndex, haystackIndex + needle.length());
            if(needle.equals(subString)){
                return haystackIndex;
            }
        }

        return -1;
    }
}
