CREATE TABLE tbl_phonebook (
 ID_Contact SERIAL CONSTRAINT pk_id_contact PRIMARY KEY,
 Name_Contact varchar(45) NOT NULL, 
 Email varchar(40) NOT NULL,
 Cell_Phone integer NOT NULL,
 Path_image varchar (80)	
);

INSERT INTO tbl_phonebook (name_contact, email, cell_phone, path_image) VALUES ('Andre', 'prog@gmail.com', 84988677623, ''),
INSERT INTO tbl_phonebook (name_contact, email, cell_phone, path_image) VALUES ('Isabele', 'ruiva@gmail.com', 84988562312, ''),
INSERT INTO tbl_phonebook (name_contact, email, cell_phone, path_image) VALUES ('Felipe', 'jogos@gmail.com', 84988754212, '')
