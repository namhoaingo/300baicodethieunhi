import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.logging.LogManager;
import java.util.logging.Logger;

public class Main {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(5);
        BankAccount account = new BankAccount(100);

        for (int i = 0; i < 10; i++) {
            BankWorker bankWorker = new BankWorker(account);
            executorService.submit(bankWorker);
        }
        try {
            executorService.awaitTermination(2000, TimeUnit.MILLISECONDS);
            executorService.shutdown();
        }
        catch (InterruptedException exception){
            System.out.println(exception);
        }
        System.out.println("Final "+ account.getBalance());
    }
}
class BankAccount{
        private int balance;
        public BankAccount(int startBalance){
            balance = startBalance;
        }

        public  int getBalance(){
            return balance;
        }

        public  void deposit(int amount){
            balance+= amount;
        }
    }
