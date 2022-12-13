#include <stdio.h>
int main(int argc, char const *argv[])
{
    /* code */
    int x, y = 10;
    x = y++;
    printf("%d%d", x, y);
    return 0;
}
