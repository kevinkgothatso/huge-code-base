package Types;

public class DataTypes {
        String  name = "Kevin Matseke";
        int number = 34;
        double numberFloat = 34.5;
        boolean isMoney = true;

        float floater = 0;

        public int number2 = 0;
        private int number3 = 90;
        char character = 3;

    public DataTypes(){
        this.number = 100;
    }
    public void ShowAllDataTypes (){
        System.out.println(this.name+" "+this.number+" "+this.numberFloat+" "+this.isMoney+" "+this.floater);
    }

}
