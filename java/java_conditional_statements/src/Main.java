import conditional.Amount;

public class Main {
    public static void main(String[] args) {
        Amount amount = new Amount();

        System.out.println("Name is Kevin"+amount.isTrueIfStatement("Kevin"));
        System.out.println("Name is Kevin "+amount.isTrueSwitchSatatement("Caraxes"));
    }
}