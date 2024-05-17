

-- @block
select 
   Users.id as user_id,
   Rooms.id as rooms_id,
   email,
   street
from Users 
inner join Rooms on rooms.owner_id;
