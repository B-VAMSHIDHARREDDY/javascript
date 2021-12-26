# Electricity Bill Generation Program.....
month_name = input()
number_of_Units = int(input())

Total_bill = 0.0

if number_of_Units < 60:
    if number_of_Units >= 0 and number_of_Units <= 30:
        Total_bill = number_of_Units * 2.50 + 30
    else:
        Total_bill = number_of_Units * 4.85 + 60

if number_of_Units >= 60:

    if number_of_Units == 60:
        Total_bill = number_of_Units*7.85

    elif number_of_Units >= 61 and number_of_Units <=90:
        Total_bill = number_of_Units*10.00+90
    
    elif number_of_Units >= 91 and number_of_Units <=120:
        Total_bill = number_of_Units*27.75+480
    
    elif number_of_Units >= 121 and number_of_Units <=180:
        Total_bill = number_of_Units*32.00+ 480
    
    elif number_of_Units >= 121 and number_of_Units <=180:
        Total_bill = number_of_Units*45.00+540


print("Number Of Units:",number_of_Units)
print("Total Amount:",Total_bill)