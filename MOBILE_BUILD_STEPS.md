# Nirmaan — Android App Build Steps

This package turns your live website (https://nirmaanv3.netlify.app/) into an
installable Android app. Your website code is untouched — the app simply opens
your live site, so every update you deploy to Netlify appears in the app
automatically.

## Easiest way: build the APK in the cloud (no setup on your computer)

1. Create a new GitHub repository and upload everything in this folder
   (including the `.github` folder — it may be hidden; enable "show hidden files").
2. GitHub will automatically build the app (see the "Actions" tab).
3. When the build finishes (about 5–10 minutes), open it and download
   `nirmaan-debug-apk` — inside is `app-debug.apk`.
4. Copy the APK to any Android phone and tap it to install
   (allow "install from unknown sources" when asked).

## Build on your own computer instead

You need: Node.js 20, Java 17, and Android Studio (for the Android SDK).

1. `npm install`
2. `npm run build`
3. `npx cap sync android`
4. `cd android && ./gradlew assembleDebug`
5. The APK is at `android/app/build/outputs/apk/debug/app-debug.apk`

Or open the `android` folder in Android Studio and press Run to test in an
emulator or on a connected phone.

## Notes

- The app needs an internet connection (it loads your live site).
- Login, bookings and the AI assistant work exactly as on your website,
  because the app talks to the same live backend.
- For the Play Store you'll later need a signed release build (AAB) and a
  Google Play developer account ($25 one-time).
- iPhone: an `ios` folder is included, but building for iPhone requires a Mac
  with Xcode and an Apple Developer account ($99/year). Note that Apple
  sometimes rejects apps that only wrap a website.
