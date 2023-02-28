package conditional;

public class Amount {
    public boolean isTrueIfStatement(String name){
        if(name == "Kevin"){
            return true;
        }
        else{
           return false;
        }
    }

    public boolean isTrueSwitchSatatement(String name){
        switch(name){
            case "Kevin":
                return true;
            default:
                return false;
        }
    }

}
