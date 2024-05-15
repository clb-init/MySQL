

# Install MySQL
------

## start or check if MS. is running, or shutdown

 ### com php

> #### start: 
>> root@host# cd /usr/bin
./safe_mysqld &

> #### check: 
>> ps -ef | grep mysqld

> #### shutdown:
>> root@host# cd /usr/bin
./mysqladmin -u root -p shutdown
Enter password: ******

## New user account
------
### with mysql

root@host# mysql -u root -p
Enter password:*******
mysql> use mysql;
Database changed

mysql> INSERT INTO user (
   host, user, 
   password, 
   select_priv, insert_priv, update_priv
) VALUES (
   'localhost', 'guest', 
   PASSWORD( 'guest123' ), 
   'Y', 'Y', 'Y'
);
Query OK, 1 row affected (0.20 sec)

mysql> FLUSH PRIVILEGES;
Query OK, 1 row affected (0.01 sec)

mysql> SELECT host, user, password FROM user WHERE user = 'guest';

+-----------+---------+------------------+
|    host   |   user  |     password     |    
+-----------+---------+------------------+
| localhost |  guest  | 6f8c114b58f2ce9e |
+-----------+---------+------------------+
1 row in set (0.00 sec)

### with sql grant command

root@host# mysql -u root -p password;
Enter password:*******
mysql> use mysql;
Database changed

mysql> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP
   -> ON TUTORIALS.*
   -> TO 'zara'@'localhost'
   -> IDENTIFIED BY 'zara123';
   
