# Generated by Django 5.0.6 on 2024-07-21 03:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_item_description_remove_item_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='brotherName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='motherName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='nickName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='pwd',
            field=models.CharField(default='', max_length=100),
        ),
    ]
