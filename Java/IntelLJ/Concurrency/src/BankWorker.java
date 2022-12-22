import java.sql.SQLOutput;

public class BankWorker implements Runnable{

    private BankAccount bankAccount;
    public BankWorker(BankAccount bankAccount){
        this.bankAccount = bankAccount;
    }
    @Override
    public void run() {
        for(int i = 0; i < 10; i++){
            int startBalance = bankAccount.getBalance();
            bankAccount.deposit(10);
            int endBalance = bankAccount.getBalance();
            System.out.println(String.format("Start %d end %d", startBalance, endBalance));
            System.out.println("ThreadID "+ Thread.currentThread().getId());
        }
    }
}
