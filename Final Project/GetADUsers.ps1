#The source file to pull specific names. 
$Users = Get-Content 'C:\Users\Administrator\Desktop\Users.txt'

#Grabbing the user's and specific properties. To grab all properties, simply put an asterick "*" in places of the current attributes
Get-ADUser -Filter '*' -Properties DisplayName,title,department,company,telephonenumber,mail |
    #Here, you can change the DisplayName variable to any other variable in which you think would be easiest to write in your Users.txt file. Whether thats Last name, username, or email.
    Where-Object { $Users -contains $_.DisplayName } |
    #The following line is just the display order in the csv file. You can arrange this in any order you please and it will not effect the action code.
    Select-Object DisplayName,title,department,company,telephonenumber,mail |
    #Below is the export location. Yes, you can export in notepad, but it's much cleaner and easier to organize in a spreadsheet format. You can even upload to Google Sheets or Smartsheet, if you do not have Excel.
    Export-Csv 'C:\Users\Administrator\Desktop\AllUsers.csv' -NoType
