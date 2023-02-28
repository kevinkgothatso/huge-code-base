package classes;

public class DogsClass implements Dogs{
    public String name ="Bingo";
    public int age = 5;
    public String breed = "Pitbull";

    public String ShowDogDetails(){
        return ("Name: "+name+" Age "+age+" Breed "+breed);
    }
}
