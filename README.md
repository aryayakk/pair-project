# pair-project

======================= Requirement in Database Level =======================

[v] Schema Table
    Terdapat entitas wajib yaitu users dengan attribute yang harus ada:
    [v] email
    [v] password
    [v] role
    Memiliki 2 jenis asosiasi yang berbeda:
    [v] One to One (wajib)
    [v] One to Many
    [] Many to Many
[v] Membuat migration
[] Membuat migration tambahan (add column, dll)
[] Membuat seeder

============================= Requirement Routes ============================

[] Minimal terdapat 2 route GET dan 1 route POST
[] Terdapat route untuk logout


========================== Requirement Aplikasi =============================

[] Terdapat fitur search atau sort (menggunakan OP dari sequelize)
[] Terdapat static method dan instance method
[] Menggunakan berbagai macam validasi dari sequelize dan mengolahnya sehingga tampil pada page
[] Menggunakan method-method sequelize yang bertujuan untuk CRUD
[] Terdapat hooks
[] Membuat dan menggunakan helper
[] Menggunakan mekanisme promise chaining

============================= Requirement Pages =============================

[] Landing page (menggambarkan project)
[] Register & login page
[] Memiliki 1 page yang menampil data gabungan dari 2 table atau lebih (gunakan eager loading dari sequelize)

============================ Requirement Explore ============================

[] Membuat sistem login dengan middleware, session & bcryptjs
[] Membuat fitur MVP (fitur unik dengan menggunakan package yang belum pernah dibahas saat lecture)

