@@ .. @@
 import { Heart, Users } from 'lucide-react';

-export default function Header() {
+export default function Header({ isDarkMode }) {
   return (
-    <header className="bg-white shadow-sm border-b border-pink-100">
+    <header className={`shadow-sm border-b transition-all duration-300 ${
+      isDarkMode
+        ? 'bg-gray-900/95 border-gray-700 backdrop-blur-sm'
+        : 'bg-white border-pink-100'
+    }`}>
       <div className="max-w-6xl mx-auto px-6 py-6">
         <div className="flex items-center justify-between">
           {/* Logo e título */}
           <div className="flex items-center space-x-4">
-            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-xl p-3 border-2 border-pink-100">
+            <div className={`flex items-center justify-center w-20 h-20 rounded-2xl shadow-xl p-3 border-2 transition-all duration-300 ${
+              isDarkMode
+                ? 'bg-gray-800 border-gray-600'
+                : 'bg-white border-pink-100'
+            }`}>
               <img 
                 src="/image.png" 
                 alt="Logo OSC GUIDO" 
@@ -25,7 +32,10 @@
               <div className="flex items-center space-x-2 mt-1">
                 <span className="text-xl font-bold text-pink-600">OSC GUIDO</span>
                 <span className="text-pink-300">•</span>
-                <span className="text-base text-gray-600 font-medium">Casa de apoio para crianças com câncer</span>
+                <span className={`text-base font-medium transition-all duration-300 ${
+                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
+                }`}>Casa de apoio para crianças com câncer</span>
               </div>
             </div>
           </div>
           
           {/* Info adicional */}
-          <div className="hidden md:flex items-center space-x-6 text-base text-gray-600">
+          <div className={`hidden md:flex items-center space-x-6 text-base transition-all duration-300 ${
+            isDarkMode ? 'text-gray-300' : 'text-gray-600'
+          }`}>
             <div className="flex items-center space-x-2">
               <Users className="w-5 h-5 text-pink-500" />
               <span className="font-medium">Sua opinião importa</span>