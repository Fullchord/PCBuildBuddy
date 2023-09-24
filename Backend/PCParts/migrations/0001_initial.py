# Generated by Django 4.2.5 on 2023-09-24 05:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PCParts',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('text', models.TextField(max_length=1000)),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'PCParts',
            },
        ),
    ]
