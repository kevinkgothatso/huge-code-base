public class Main {
    public static void main(String[] args) {

        String cars  [] = {"BMW", "BIAC","Opel","Suzuki"};

        //forloop
        System.out.println("========");
        System.out.println("For loop");
        for(int x= 0; x < 4; x++){
            System.out.println(cars[x]);
        }


        //foreach
        int sentinel = 0;
        for(String i: cars){
            cars[sentinel] = i + " Bought";
            sentinel++;
        }

        //whileloop
        sentinel = 0;
        System.out.println("========");
        System.out.println("While loop:");

        while( sentinel <= cars.length-1){
            System.out.println(cars[sentinel]);
           sentinel++;
        }



    }
}