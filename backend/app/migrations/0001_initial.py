# Generated by Django 5.0.1 on 2024-04-08 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('title', models.TextField()),
                ('description', models.TextField()),
            ],
            options={
                'db_table': 'Post',
            },
        ),
    ]
