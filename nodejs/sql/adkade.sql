create table users(
    id bigserial primary key,
    name varchar(255),
    username varchar(100) unique,
    email varchar(255) unique,
    phone_number varchar(20),
    address varchar(255),
    role smallint
)