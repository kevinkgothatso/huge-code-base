import classes.*;

public class Main {
    public static void main(String[] args) {

       Person person = new Person();
       Humaniod humaniod = new Humaniod();
       DogsClass dogs = new DogsClass();

        System.out.println(person.ShowName());
        System.out.println(humaniod.ShowName());
        System.out.println(dogs.ShowDogDetails());

    }
}