 # Jajaran Genjang

buatlah sebuah function yang menerima 2 buah parameter berupa panjang dan lebar, kemudian generate sebuah bentuk jajaran genjang yang terbalik secara horizontal.
Lihat contoh driver code ini

generateJajarGenjang(5,4)
//output yang dihasilkan :
```
- - - - -
\         \
  \         \
    \         \
      \         \
        - - - - -
```
generateJajarGenjang(3,3)
//output yang dihasilkan :
```
- - -
\     \
  \     \
    \     \
      - - -
```

generateJajarGenjang(2,4)
//output yang dihasilkan :
```
- -
\   \
  \   \
    \   \
      \   \
        - -
```



Step by step descriptive logic to print rhombus star pattern.

Input number of rows to print from user. Store it in a variable say rows.
To iterate through rows, run an outer loop from 1 to rows. Define an outer loop with structure for(i=1; i<=rows; i++).
To print trailing spaces, run an inner loop from 1 to rows - i. Run a loop with structure for(j=1; j<=rows - i; j++). Inside this loop print blank space.
To print stars, run another inner loop from 1 to rows with structure for(j=1; j<=rows; j++).
Inside this loop print star for first or last row, and for first or last column otherwise print spaces. Which is print stars only when i==1 or i==rows or j==1 or j==rows.
After printing all columns of a row move to next line i.e. print new line.

