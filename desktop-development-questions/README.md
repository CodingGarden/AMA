j_snowin - Hey, CJ! Please assist me in selecting the optimal stack for desktop development. Please give some resources! I'm stuck! And my request is to do some full-stack desktop development. I know that you worked in the desktop field before web development.

* Electron vs C#?

* Is cross platform important? Yes

* Native Development (custom / specific codebase for each platform)
  * Windows
    * UI Framework
      * Maui (Latest and greatest)
      * WPF (Windows Presentation Foundation)
      * WinForms
    * Language
      * C#, C++ or any other .NET language
      * XAML (XML based UI Language)
  * Mac
    * Framework
      * Cocoa
        * https://en.wikipedia.org/wiki/Cocoa_(API)
        * https://en.wikipedia.org/wiki/Cocoa_Touch
    * Language
      * C, C++, Objective-C, Swift
  * Linux
    * Frameworks
      * Varies by distribution / desktop environment...
      * Qt
      * GTK
    * Language
      * C / C++
  * iOS
    * Framework
      * Cocoa
        * https://en.wikipedia.org/wiki/Cocoa_(API)
        * https://en.wikipedia.org/wiki/Cocoa_Touch
    * Language
      * C, C++, Objective-C, Swift
  * Android
    * Framework
      * Android SDK
    * Language
      * Java
      * Kotlin

* Cross Platform
  * Single Code Base
    * Deployed / Distributed to multiple platforms
      * Windows
      * Mac
      * Linux
      * iOS
      * Android
  * Some frameworks - 100% of the code is re-used cross platform
  * Some frameworks
    * ~60% of the code is re-used cross platform
    * ~40% is custom for each platform
  * Native Interoperability
    * Closer to Native
    * Might use Native UI Elements
    * Might use Custom Rendering Engine...
    * NOT A WEB VIEW
    * Options
      * Desktop
        * GTK
        * QT
        * libuinode
          * Proton.js
          * Vuido
      * Mobile
        * Nativescript
        * Kotlin
      * Mobile + Web
        * React Native
      * Mobile + Desktop
        * Sciter
        * FireMonkey
        * Maui / Xamarin
      * Mobile + Desktop + Web
        * Flutter
  * PWA
    * Progressive Web App
    * Runs in a web browser
    * A Web Page that can behave like a native app
      * Uses APIs supported by web browsers to do "native" like things IF available
    * Can work offline 
      * Sync when connected
  * Hybrid Web
    * Native Shell that supports web technologies
    * Uses A Native Bridge
      * Cordova
      * Capacitor
      * Framework Specific...
    * Frameworks
      * Desktop
        * Native Language
          * Node.js / JavaScript
            * nw.js
            * Neutralinojs
            * Deskgap
            * Electron
          * Rust
            * Tauri
          * Go
            * Wails
      * Mobile & Desktop
        * Framework7
        * Quasar
        * Ionic Framework
    