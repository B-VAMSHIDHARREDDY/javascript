months  = {
    "Jan"   : 31,
    'Feb'  : 28,
    "Mar"     : 31,
    "Apr"     : 30,
    "May"       : 31,
    "Jun"      : 30,
    "Jul"      :31,
    "Aug"    :31,
    "Sep" : 30,
    "Oct"   :31,
    "Nov"  : 30,
    "Dec"  : 31
}
Names = [];
user_name = [];
Password = [];

def Registration():
    print("\n", "$$" * 50)
    name = input("please enter your name : ")
    year = int(input("enter the year : "))
    while True:
        pswd = input("please enter your password : ")
        passwd = input("enter your password again : ")
        if pswd != passwd:
            print("password does not much !!!. check well ")
        else:
            Password.append(passwd)
            Names.append(name)
            Password.append(passwd)
            user_name.append("HLT" + str(year)+ name[0:2])
            print(" please your username is ECG" +str(year)+  name[0:2]  )
        break

    print("\n", "=" * 15, "Registration done", "=" * 15, sep="")

def Login():
    username = (input("Please input your username\n> "));
    if username not in user_name:
        print("\nusername not found");
    else:
        passwd = input("Input password\n> ");
        if passwd == Password[username.index(user_name)]:
            print("\nLogin successful");
            print(f"Welcome {Names[username.index(user_name)]}!");
        else:
            print("\nWrong password or Id!!\nPlease check!");

def ViewBill():
    print("=" * 50)
    print("Use first three letters for each month")
    month = input("enter your month :  ")
    for i in months:
        if i == month:
            print(month)
            break
    units = float(input("Please enter the number of units consumed : "))
    if 0 < units <= 30:
        fixed_charge = 30
        unit_charge = 2.50
        amount = (unit_charge * units) + fixed_charge
    elif 31 < units <= 60:
        fixed_charge = 60.00
        unit_charge = 4.85
        amount = (unit_charge * units) + fixed_charge
    elif 61 < units <= 90:
        fixed_charge = 90
        unit_charge = 10.0
        amount = (unit_charge * units) + fixed_charge
    elif 91 < units <= 120:
        fixed_charge = 480
        unit_charge = 27.75
        amount = (unit_charge * units) + fixed_charge
    elif 121 < units <= 180:
        fixed_charge = 480
        unit_charge = 32
        amount = (unit_charge * units) + fixed_charge
    else:
        fixed_charge = 540
        unit_charge = 45
        amount = (unit_charge * units) + fixed_charge
    print("total amount, ", amount)
    print("total units, ", units)

def program():
    selected_optn = 0;
    while selected_optn != 4:
        print("\n","="*50,sep="");
        print("Please input,");
        print("[1] to Login\n[2] for Registration");
        print("[3] to View Bill\n[4] to Quit");
        print("="*50,"\n");
        selected_optn = eval(input("> "));
        if selected_optn == 1:
            Login();
        elif selected_optn == 2:
            cntnue = input("Input (y) to continue else any key to quit\n> ");
            while cntnue == "y":
                Registration();
                cntnue = input("continue?\n> ");
        elif selected_optn == 3:
            ViewBill();
        elif selected_optn == 4:
            print("\n\nProgram end!!!\n");
            print("-"*20,"Bye!!","-"*20,"\n\n");
            break;
        else:
            print("Input out of range!!!\ntry again!!!");

program()