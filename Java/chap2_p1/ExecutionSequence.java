package chap2;

public class ExecutionSequence {
    String _name = "1";
    public ExecutionSequence(String name) {
        _name = name;
    }

    public static void main(String[] args) {
        ExecutionSequence executionSequence = new ExecutionSequence("2");
        System.out.println(executionSequence._name);
    }   
    
    {
        _name = "3";
    }
}
// output 2

// 1 - Line 4
// 2- Line 15
// 3 Run Construtor