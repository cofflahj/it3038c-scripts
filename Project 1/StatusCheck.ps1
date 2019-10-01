$ServerName = Get-Content "C:\Servers.txt
# You will need to have a list of IP addresses for your servers saved in this location unless otherwise speciffied above

foreach ($Server in $ServerName) {
  if (test-connection -ComputerName $Server -Count 2 -Quiet ) {
    "$Server : Server is currently [ UP ]"
      } else
      {"$Server : Server is currently [ DOWN ]"
      }
 }
