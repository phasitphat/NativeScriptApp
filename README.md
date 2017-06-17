
----- INSTALL ENVIRONMENT FOR GRAVITYDESIGNS APPLICATION -----

--------- SYSTEM REQUIREMENT TO INSTALL APPLICATION  ---------

1. Windows 7 Service Pack 1 or later
2. The latest stable official release of Node.js (LTS) 6.x
3. (Optional) Chocolatey to simplify the installation of dependencies
4. JDK 8 or a later stable official release
5. Android SDK 22 or a later stable official release
6. Android Support Repository
7. (Optional) Google Repository
8. Android SDK Build-tools 25.0.2 or a later stable official release
9. Set up Android virtual devices to expand your testing options

You must also have the following two environment variables setup for Android development, which will automatically be added for you as part of the installation:
1. JAVA_HOME
2. ANDROID_HOME

---------------------------------------------------------------

-------------------- Installation guide -----------------------

1. Install node-v6.11.0-x64
2. Open Command line ( Run as Administrator )
	
	npm install –g nativescript@2.5.0

		Do you want to run the setup script ? YES
		( if have some question to install ENVIRONMENT please say "YES" or "ALL" for sure )

	or use

		@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-objectnet.webclient).DownloadString('https://www.nativescript.org/setup/win'))"

	and say "ALL"

	after install Use "tns" to check

3. into app/components/serverurl.ts in Clone directory

	Change value setserver to IPServer(IPv4 address of Server computer)

4. Connect Android Phone with your Computer

5. Open Command line and into directory

	Use "tns run android" in Command line

-----------------------------------------------------------------

***** if your computer didn't install Android development

1. Install jdk-8u131-windows-x64
2. Open Command line and USE "android update sdk –u" to update all SDK
3. set ANDROID_HOME and Path

	ANDROID_HOME = C:\<installation location>\android-sdk
	PATH = C:\<installation location>\android-sdk\tools;C:\<installation location>\android-sdk\platform-tools;C:\<installation location>\android-sdk\build-tools;

"# GravityDesignsApplication" 
