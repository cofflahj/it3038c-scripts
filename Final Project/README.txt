For my final project, I wanted to take a different direction from my previous two projects. I took note of your comments from Project 1 and having to edit files to make them run. However, for this project, you will have to run this on my Windows Server located within my Sandbox. This is, because this script runs specifically with Active Directory and the users I've already created on my system. Instead of doing a script that runs on a general basis with any given user account, I thought it would be unique to go in-depth and fully create the Active Directory and a Domain Forest on my server with user accounts. For that reason, I had to give up some of the ease-of-use variables that could be taken into account for grading and I wanted to let you know right away with my reasoning of doing so. Below, you can find the credentials for signing into the account:

--- Credentials ---
HUNTER\Administrator
Pa$$w0rd
---              ---

This script appears fairly simple on the outside, however it can be manipulated and changed in so many different ways to acquire information with any given active directory. This can be useful in the real world for departments that want to audit, check, update, or simply snapshot their OU's or Active Directory in it's entirety. At my old co-op at thyssenkrupp, the HR department and IT department worked closely to ensure records on both ends matched (such as job title, department, contact information, manager, etc.) Many people don't realize how AD ties this information into your digital profile with a company. For example, it ties in well with Outlook, Teams, and Office Online. I could go to the address book in Outlook at my old company and find a user's phone number from a sister company in Germany or France. I believe it's extremely cool and beneficial to the businesses that use AD as much as they can because from and IT standpoint it makes things much simpler and easier in the long run.

First and foremost, this script is used to pull data from specific accounts from an active directory. This can be done by calling groups, OU's, or just users by line breaks within a .txt document. For this example, I have created a number of users in my active directory. I have attached the "AD_GUI_EXPORT" file to show you what my Users OU looks like prior to running this script. Of course, they don't have to be in order but I wanted to include this for reinforcement. Next, you will want to ensure you have a text file like mine (Users.txt) with the names in order of which you'd like to gather the information. The cool thing about this is you can fetch any variable you want, just switch "$_.DisplayName" with "$_.mail" or "$_.SamAccountName" for network username or email address.

Script File: "GetADUsers.ps1"
- * - * - * The Breakdown: * - * - * -

Then, it's important to note the line: $Users = Get-Content 'C:\Users\Administrator\Desktop\Users.txt'
> This is where you tell the console where your list is located and where to pull from. These files are already located on my desktop but if you were doing this yourself you would need to ensure the correct destination is labeled. In short, this is defining the $Users variable and telling it to pull the content from the txt file.

The next line: 
Get-ADUser -Filter '*' -Properties DisplayName,title,department,company,telephonenumber,mail |
> This filters what type of records you want to pull. Depending on your company, you might have every field filled in your user's active directory while some may not save nearly that much stored.

Next, the line: 
Where-Object { $Users -contains $_.DisplayName } |
> Going back to where I mentioned this a few steps ago, this calls for the User variable in which we defined at the beginning. As said, you can change the DisplayName variable to plenty of other fields depending on what you record. For a list of AD variables you can check out this link: https://www.manageengine.com/products/ad-manager/help/csv-import-management/active-directory-ldap-attributes.html

Now, we want to make sure the console selects the proper variables to export with this line: 
Select-Object DisplayName,title,department,company,telephonenumber,mail |
> This line is similar to the filter code and it tells the console which variables to select for export which is coming up in the next description...

Finally, the line:
Export-Csv 'C:\Users\Administrator\Desktop\AllUsers.csv' -NoType
> The last line simply exports the fields you had selected previously into a .csv file. You can of course change this to a different format or just do txt however it would be easier to read in spreadsheet apps with .csv.

I have included the export file AND the excel (prettier version) as an example of the final product in the repository. It is called "All Users.csv" and "Final Product.xlsx.". There is no excel in the sandbox, so you will need to sign into Office Online to view it. 95% of workplaces and especially the ones with Microsoft Administration Tools use Excel and other office applications so it is unfortunate I cannot use these in the sandbox as it is unrealistic in those regards. I did not want to install office as I can only link a certain # of devices with my UC Office account. Once open in excel, you can arrange the data and fully customize the spreadsheet to make it easier to read. After some research, I could not find anyone that could successfully do this in the code itself but I feel like it could be possible -- this would be a good thing to follow up on if I needed to expand this project.

In conclusion, this code is extremely useful and beneficial for both IT and HR departments in a given business or company. This seamlessly grabs all sorts of information at once and organized it in a way you can't do with AD. Yes, you can export lists from the GUI in AD but it does NOT allow you to filter or order the items you want and rather dumps all of the information. This script provides a nice, cut and dry format that is easy to read and allows customization further on after exporting it. Again, I hate to force you to use my Windows Server to do this but I believe setting up the domain and AD servers paved way for a unique practice and learning experience as I haven't done that on my own (outside of lab instructions) in any of my classes yet. 

On a final note, thank you for making this online course about as interesting as it could have been. I have gained a ton of knowledge that will help me in further co-op experiences and in my career aspirations post-graduation. Learning the different aspects of the coding world was not only interesting but quite fun at times.
