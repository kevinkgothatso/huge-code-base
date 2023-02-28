package Types;
//import java.time.LocalDate;
import java.util.Date;

public class DataObjects {

    //array
    int numbers [] = {1,5,78,90,100};
    String cars [] ={"BMW", "Benz", "Volvo", "VW"};


    //date
//    LocalDate date = new LocalDate.now();
    Date date = new Date();

    public String getDate() {
        return date.toString();
    }

    public int ShowArrayNumber(int index){
        return this.numbers[index];
    }
}
