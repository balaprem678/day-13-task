let a,b,c,d;
a = 0;
b = 1;
c = a + b;
d = 20;
console.log(+a);
console.log(+b);
for(i = 0; i < d; i++)
{
  c = a + b;
  a = b;
  b = c;
  console.log(+c);
}

