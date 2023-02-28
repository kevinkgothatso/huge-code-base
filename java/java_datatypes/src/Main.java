import Types.DataTypes;
import Types.DataObjects;

import java.time.LocalDate;

public class Main {

    //enums are basically useless in a switch statement

    enum packages{
        BRONZE,
        SILVER,
        GOLD
    }

    public static void main(String[] args) {
         String myName = "Kevin Matseke";

        DataTypes dataTypes = new DataTypes();
        DataObjects dataObjects = new DataObjects();

        System.out.println(myName);
        dataTypes.ShowAllDataTypes();
        System.out.println(dataObjects.ShowArrayNumber(1));


        System.out.println(packages.GOLD);
        System.out.println(dataObjects.getDate());
    }
}

