`2017年11月16日`
# Use proxy in the Windows App
CheckNetIsolation.exe is a exe file in C:\Windows\System32\
The syntax : 
* Show the enabled-proxy app list
  `CheckNetIsolation LoopbackExempt -s`
* Add a app to the list
  `CheckNetIsolation LoopbackExempt -a -p=SID`
* Delete a app from the list
  `CheckNetIsolation LoopbackExempt -d -p=SID`
* About the SID
  SID is the identifier of app.
  * How to get SID
    1. In powershell, `regedit`.
    1. locate to `HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\CurrentVersion\AppContainer\Mapping`.
    1. the folder name like `S-1-15-2-3624051433-2125758914-1423191267-1740899205-1073925389-3782572162-737981194` is SID.
* Need Admin account mode to run.
```powershell
PS C:\Users\Admin> CheckNetIsolation.exe LoopbackExempt -s

 AppContainer

[1] -----------------------------------------------------------------
    : microsoft.microsoftedge_8wekyb3d8bbwe
    SID:  S-1-15-2-3624051433-2125758914-1423191267-1740899205-1073925389-3782572162-737981194


PS C:\Users\Admin> CheckNetIsolation.exe LoopbackExempt -a -p=SID
```